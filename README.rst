=============
D:GameVFS 0.2
=============

------------
Introduction
------------

D:GameVFS is a minimalist open source virtual file system library for the
D programming language oriented at game developers.

Provided functionality is very basic - files and directories can be created,
read and written, but not deleted. There are no security features - e.g.
D:GameVFS can't handle a situation when a file it's working with is deleted
outside the program. Only files in a physical file system are supported at the
moment. There is no archive support right now.

D:GameVFS is a work in progress and its API is not stable. There might be
compatibility breaking changes in future versions.


--------
Features
--------

* File system independent, easy to use API for file/directory manipulation.
* Detailed `API documentation <http://defenestrate.eu/docs/dgamevfs>`_ with code
  examples.
* No external dependencies.
* Seamless access to multiple directories as if they were a single directory.
* Easy to extend with custom file system backend.
* There is no support for ZIP or similar archive formats at the moment.
* There is no support for deleting files/directories, and none is planned.
* There are no security features and none are planned.


-------------------
Directory structure
-------------------

===============  =======================================================================
Directory        Contents
===============  =======================================================================
``./``           This README file, utility scripts.
``./doc``        API documentation, also found
                 `online <http://defenestrate.eu/docs/dgamevfs>`_
``./source``     Source code.
``./examples``   Code examples.
===============  =======================================================================


---------------
Getting started
---------------

^^^^^^^^^^^^^^^^^^^^^^^^
Install the DMD compiler
^^^^^^^^^^^^^^^^^^^^^^^^

Digital Mars D compiler, or DMD, is the most commonly used D compiler. You can find its
newest version `here <http://dlang.org/download.html>`_.  Download the version of DMD
for your operating system and install it.

.. note::
   Other D compilers exist, such as
   `GDC <http://gdcproject.org/>`_ and
   `LDC <http://bitbucket.org/goshawk/gdc/wiki/Home>`_.

^^^^^^^^^^^
Install dub
^^^^^^^^^^^

`dub <http://code.dlang.org/about>`_ is a build system and package manager for D.
It is the standard way to manage D projects and their dependencies, compilation and so
on.

DMD may include DUB in future releases, but at this point we need to install it
separately. See
`installation instructions <https://github.com/D-Programming-Language/dub#installation>`_.

^^^^^^^^^^^^^^^^^^^^^^^^
Simple D:GameVFS project
^^^^^^^^^^^^^^^^^^^^^^^^

Create a directory for your project. To have something for D:GameVFS to work with,
create subdirectories ``main_data`` and ``user_data`` in the project directory. In these
directories, create some random files or subdirectories.  Create a file called
``main.d`` in your project directory. Paste the following code into the file:

.. code-block:: d

   import std.stdio;
   import std.typecons;
   import dgamevfs._;

   void main()
   {
       // Two filesystem directories, one read-only and the other read-write.
       auto main = new FSDir("main", "main_data/", No.writable);
       auto user = new FSDir("user", "user_data/", Yes.writable);

       // Stack directory where "user" overrides "main".
       auto stack = new StackDir("root");
       stack.mount(main);
       stack.mount(user);

       // Iterate over all files recursively, printing their VFS paths.
       foreach(file; stack.files(Yes.deep))
       {
           writeln(file.path);
       }

       VFSFile file = stack.file("new_file.txt");
       // Creates "new_file" in "user" (which is on top of "main" in the stack).
       file.output.write(cast(const void[])"Hello World!");

       // Read what we've written.
       auto buffer = new char[file.bytes];
       file.input.read(cast(void[]) buffer);

       writeln(buffer);
   }


Code for this example can be found in the ``examples/getting_started`` directory.

See the API documentation in the ``doc/html/`` directory (in particular, the
*dgamevfs.vfs* module) for more code examples.


^^^^^^^^^^^^^^^^^^^^^^^
Explanation of the code
^^^^^^^^^^^^^^^^^^^^^^^

We start by importing *dgamevfs._* which imports all needed D:GameVFS modules.
D:GameVFS uses the *Flag* template instead of booleans for more descriptive parameters
(such as ``Yes.writable`` instead of ``true``). You need to import *std.typecons* to use
*Flag*.

We create two *FSDirs* - physical file system directory objects, which will be called
``main`` and ``user`` in the VFS and will represent the ``main_data`` and ``user_data``
directories which we've created in our project directory.  We construct ``main`` as
a non-writable directory - it's read-only for the VFS.

Next, we create a *StackDir* and *mount()* our directories to it. *StackDir* works with
mounted directories as if they were a single directory - for instance, reading
``file.txt`` from the StackDir, will first try to read ``user_data/file.txt``, and if
that file does not exist, ``main_data/file.txt``.  Files in directories mounted later
take precedence over those mounted earlier.

*StackDir* makes it possible, for example, to have a main game directory with common
files and a mod directory overriding some of those files.

Then we iterate over all files in the *StackDir* recursively (using the ``Yes.deep``
argument) - including files in subdirectories. Path of each file in the VFS is printed.
You should see in the output that the files' paths specify ``stack`` as their parent
since ``main`` and ``user`` are mounted to ``stack``. (Note that the paths will refer to
``stack`` as parent even if iterating over ``main`` and ``user`` - as those are now
mounted to ``stack``.)

Then we get a *VFSFile* - D:GameVFS file object - from the ``stack`` directory.  This
file does not exist yet (unless you created it). It will be created when we write to it.

To obtain writing access, we get the *VFSFileOutput* struct using the *VFSFile.output()*
method. *VFSFileOutput* provides basic output functionality.  It uses reference counting
to automatically close the file when you are done with it. Since we just want to write
some simple text, we call its *write()* method directly. *VFSFileOutput.write()* writes
a raw buffer of data to the file, similarly to *fwrite()* from the C standard library.

Note that we're working on a file from a *StackDir*. *StackDir* decides where to
actually write the data. In our case, the newest mounted directory is ``user``, which is
also writable, so the data is written to ``user_data/new_file.txt``.

In the end, we read the data back using the *VFSFileInput* class - input analog of
*VFSFileOutput* - which we get with the *VFSFile.input()* method.  We read with the
*VFSFileInput.read()* method, which reads data to provided buffer, up to the buffer
length. We determine how large buffer we need to read the entire file with the
*VFSFile.bytes()* method. The buffer might also be larger than the file - *read()* reads
as much data as available and returns the part of the buffer containing the read data.

For more details about D:GameVFS API, see the
`documentation <http://defenestrate.eu/docs/dgamevfs>`_.


^^^^^^^^^
Compiling
^^^^^^^^^

We're going to use dub, which we installed at the beginning, to compile our project.

Create a file called ``dub.json`` with the following contents:

.. code-block:: json

   {
       "name": "getting-started",
       "targetType": "executable",
       "sourceFiles": ["main.d"],
       "mainSourceFile": "main.d",
       "dependencies":
       {
           "dgamevfs": { "version" : "~>0.2.0" },
       },
   }

This file tells dub that we're building an executable called ``getting-started`` from
a D source file ``main.d``, and that our project depends on D:GameVFS 0.5.0 or any
newer, bugfix release of D:GameVFS 0.5 . DUB will automatically find and download the
correct version of D:YAML when the project is built.

Now run the following command in your project's directory::

   dub build

dub will automatically download D:GameVFS and compile it, and then then it will compile
our program.  This will generate an executable called ``getting-started`` or
``getting-started.exe`` in your directory.


-------
License
-------

D:GameVFS is released under the terms of the
`Boost Software License 1.0 <http://www.boost.org/LICENSE_1_0.txt>`_.
This license allows you to use the source code in your own projects, open source
or proprietary, and to modify it to suit your needs. However, in source
distributions, you have to preserve the license headers in the source code and
the accompanying license file.

Full text of the license can be found in file ``LICENSE_1_0.txt`` and is also
displayed here::

    Boost Software License - Version 1.0 - August 17th, 2003

    Permission is hereby granted, free of charge, to any person or organization
    obtaining a copy of the software and accompanying documentation covered by
    this license (the "Software") to use, reproduce, display, distribute,
    execute, and transmit the Software, and to prepare derivative works of the
    Software, and to permit third-parties to whom the Software is furnished to
    do so, all subject to the following:

    The copyright notices in the Software and this entire statement, including
    the above license grant, this restriction and the following disclaimer,
    must be included in all copies of the Software, in whole or in part, and
    all derivative works of the Software, unless such copies or derivative
    works are solely in the form of machine-executable object code generated by
    a source language processor.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
    SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
    FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
    DEALINGS IN THE SOFTWARE.


-------
Credits
-------

D:GameVFS was created by Ferdinand Majerech aka Kiith-Sa kiithsacmp[AT]gmail.com .

The API was inspired the VFS API of the
`Tango library <http://www.dsource.org/projects/tango/>`_.

D:GameVFS was created using Vim and DMD on Debian, Ubuntu and Linux Mint as a VFS
library in the `D programming language <http://www.d-programming-language.org>`_.
