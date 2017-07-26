/*
Node Core Modules:-

These are node core modules also called built-in:
That means modules which you can use them without any further installation
1 - assert          : Provides a set of assertion tests
2 - buffer          : To handle binary data
3 - child_process   : To run a child process
4 - cluster         : To split a single Node process into multiple processes
5 - crypto          : To handle OpenSSL cryptographic functions
6 - dgram           : Provides implementation of UDP datagram sockets
7 - dns             : To do DNS lookups and name resolution functions
8 - domain          : Deprecated.To handle unhandled errors
9 - events          : To handle events
10 - fs             : To handle the file system
11 - http           : To make Node.js act as an HTTP server
12 - https          : To make Node.js act as an HTTPS server.
13 - net            : To create servers and clients
14 - os             : Provides information about the operation system
15 - path           : To handle file paths
16 - punycode       : Deprecated.A character encoding scheme
17 - querystring    : To handle URL query strings
18 - readline       : To handle readable streams one line at the time
19 - stream         : To handle streaming data
20 - string_decoder : To decode buffer objects into strings
21 - timers         : To execute a function after a given number of milliseconds
22 - tls            : To implement TLS and SSL protocols
23 - tty            : Provides classes used by a text terminal
24 - url            : To parse URL strings
25 - util           : To access utility functions
26 - v8             : JavaScript engine
27 - vm             : To compile JavaScript code in a virtual machine
28 - zlib           : To compress or decompress files
    */

//We already have used some of them such as fs and http
// we call them in this way
const anyLogicalName = require('moduleName');
//Example
const httpModule = require('http');