---
title: Streams
sidebar:
  order: 11
slug: program-construction/streams
prev: true
next: true
---

Stream means a continuous flow of data. Stream is an object that reads from from
a _source_ or write to a _destination_ or both. Used to output to a screen or a
read from a keyboard. Used when total memory is lesser than the incoming or
outgoing data. Used to process and transmit data progressively.

In Java, streams are used to perform input and output (I/O) operations.

## Types

### Based on data format

#### Byte-oriented

Handles data in raw binary format. Used for input and output of 8-bit bytes. In
Java, the main classes to work with byte streams are `InputStream` and
`OutputStream`.

#### Character-oriented

Handles data in the form of characters (16-bit Unicode). Used for input and
output of characters. In Java, the main classes to work with character streams
are:

In the below example, output file is written as the input file is being read.
This approach can be used to copy a huge file as well.

```java
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class CharacterStreamExample {
    public static void main(String[] args) {
        try (FileReader fr = new FileReader("input.txt");
             FileWriter fw = new FileWriter("output.txt")) {
            int charData;
            while ((charData = fr.read()) != -1) {
                fw.write(charData);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### Based on behaviour

#### Input stream

In Java:

- `InputStraem` - an abstract class that represents an input stream of bytes.
  Provides methods to read bytes from a source.
- `Reader` - an abstract class that represents an input stream of characters.
  Provides methods to read characters from a source.

Common subclasses of `InputStream` include:

- `FileInputStream` for reading from files.
- `ByteArrayInputStream` for reading from byte arrays.
- `BufferedInputStream` for buffering input to improve performance.

Common subclasses of `Reader` include:

- `FileReader` for reading from files.
- `CharArrayReader` for reading from character arrays.
- `BufferedReader` for buffering input to improve performance.

#### Output stream

In Java:

- `OutputStream` - an abstract class that represents an output stream of bytes.
  Provides methods to write bytes to a destination.
- `Writer` - an abstract class that represents an output stream of characters.
  Provides methods to read characters from a source.

Common subclasses of `OutputStream` include:

- `FileOutputStream` for writing to files.
- `ByteArrayOutputStream` for writing to byte arrays.
- `BufferedOutputStream` for buffering output to improve performance.

Common subclasses of `Reader` and `Writer` include:

- `FileWriter` for and writing to files.
- `CharArrayWriter` for writing to character arrays.
- `BufferedWriter` for buffering output to improve performance.

#### Connection stream

Basic streams that connect directly to the source or destination of data.

#### Chain stream

A stream that is reads from or writes to a stream. Used to add additional
functionality to connection streams. Aka. filtered stream.
