Find a procedure to transfer two text files from one virtual machine to another virtual machine. Also, add some text in the file and display it before and after transfer on both the VMs.

- [VMDK File](https://drive.google.com/drive/folders/1me_nJJh0fvdDOXX3ew2jzGQpoP7f_iFt)
- SCP Command:
  ```sh
  scp <filename> <hostname>@<inet>:/home/vagrant
  ```
  (Here, the hostname is of the destination VM.)