# VMware Campus Ambassador Program Hackathon

## Summary

| Team Name    | Angry Coders                                  |
| ------------ | --------------------------------------------- |
| Members      | Arpit Bhalla, Kunal Dhiman                    |
| Category     | App Modernization                             |
| Topic        | Developing online compiler                    |
| Tech Stack | Typescript + Web Assemobly 
| College Name | National Institute of Technology, Kurukshetra |

## Topic
Choose any open-source tech stack for development. Develop a web application based
online compiler that helps us to run the program (choose your preferred language other
than database) through web browser. Example of such: Code Sandbox, stack blitz and online
assessment platforms like Hacker rank. Not limited to create your own programming
language as well.

- [Overview](#overview)
  * [Basic Structure](#basic-structure)
  * [High Level Design](#high-level-design)
    + [Lexer](#lexer)
      - [Tokens/Identifiers](#tokens-identifiers)
      - [Task of Lexer](#task-of-lexer)
    + [Parsing](#parsing)
    + [Abstract Source Tree (AST)](#abstract-source-tree--ast-)
    + [Exceution](#exceution)
    + [HLD Diagram](#hld-diagram)


## Overview



### Basic Structure

- Variables
- Functions
- Loops

### High Level Design

> A programming language is generally structured as a pipeline. That is, it has several stages. Each stage has data formatted in a specific, well defined way. It also has functions to transform data from each stage to the next.

The first stage is a string containing the entire input source file. The final stage is something that can be run. This will all become clear as we go through the Pinecone pipeline step by step.

#### Lexer
The first step in most programming languages is lexing, or tokenizing. ‘Lex’ is short for lexical analysis, a very fancy word for splitting a bunch of text into tokens. The word ‘tokenizer’ makes a lot more sense, but ‘lexer’ is so much fun to say that I use it anyway.

##### Tokens/Identifiers
A token is a small unit of a language. A token might be a variable or function name (AKA an identifier), an operator or a number.

##### Task of Lexer

The lexer is supposed to take in a string containing an entire files worth of source code and spit out a list containing every token.

#### Parsing
The second stage of the pipeline is the parser. The parser turns a list of tokens into a tree of nodes. A tree used for storing this type of data is known as an Abstract Syntax Tree, or AST. At least in Pinecone, the AST does not have any info about types or which identifiers are which. It is simply structured tokens.

#### Abstract Source Tree (AST)


#### Exceution




#### HLD Diagram
![Compiler Image](./compiler.png)
