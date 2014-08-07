-----
0.2.0
-----

^^^^^^^^^^^^^^^^
Breaking changes
^^^^^^^^^^^^^^^^

- The ``cdc.d`` build script has been removed; dub is now the only 'official'
  way to build D:GameVFS.
- Removed the ``std.stream.Stream`` wrapper for a VFSFile; it was a half-broken hack to 
  get D:YAML to work.
- Broke compatibility with all DMD versions before 2.066

^^^^^^^^^^^^^^^^
API improvements
^^^^^^^^^^^^^^^^

- ``VFSDirs`` with a parent ``VFSDir`` can now be mounted into a ``StackDir``.
- More ``@safe pure nothrow`` in the API.
- ``VFSDir.remove()`` method to recursively delete a directory.
- ``physicalFSFile()`` function to load an ``FSFile`` outside of the VFS. Allows to use 
  the same API for files in and outside of the VFS.

^^^^^^^^^^^^^^^^^^
Other improvements
^^^^^^^^^^^^^^^^^^

- Compatibility with DMD 2.066.
- Updated documentation, example to reflect changes.

^^^^^^^^
Bugfixes
^^^^^^^^

- File/directory paths are no longer compared cese-insensitively in ``VFSRange``.
- Explicit packages can now be used to address files in nested StackDirs.
- Fixed 32bit builds of D:GameVFS.
- Fixed file/directory listing on Windows.
- Various small bugfixes.
