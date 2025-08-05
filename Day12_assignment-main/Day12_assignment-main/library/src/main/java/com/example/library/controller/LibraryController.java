package com.example.library.controller;
import com.example.library.entity.*;
import com.example.library.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api")
public class LibraryController {
    @Autowired
    private BookRepository bookRepo;
    @Autowired
    private AuthorRepository authorRepo;
    @Autowired
    private CategoryRepository categoryRepo;
    @Autowired
    private ReaderRepository readerRepo;
    // ---------- BOOK ----------
    @PostMapping("/books")
    public Book addBook(@RequestBody Book book) {
        return bookRepo.save(book);
    }
    @GetMapping("/books")
    public List<Book> getAllBooks() {
        return bookRepo.findAll();
    }
    @GetMapping("/books/{id}")
    public Book getBookById(@PathVariable Long id) {
        return bookRepo.findById(id).orElse(null);
    }
    @DeleteMapping("/books/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookRepo.deleteById(id);
    }
    // ---------- AUTHOR ----------
    @PostMapping("/authors")
    public Author addAuthor(@RequestBody Author author) {
        return authorRepo.save(author);
    }
    @GetMapping("/authors")
    public List<Author> getAllAuthors() {
        return authorRepo.findAll();
    }
    // ---------- CATEGORY ----------
    @PostMapping("/categories")
    public Category addCategory(@RequestBody Category category) {
        return categoryRepo.save(category);
    }
    @GetMapping("/categories")
    public List<Category> getAllCategories() {
        return categoryRepo.findAll();
    }
    // ---------- READER ----------
    @PostMapping("/readers")
    public Reader addReader(@RequestBody Reader reader) {
        return readerRepo.save(reader);
    }
    @GetMapping("/readers")
    public List<Reader> getAllReaders() {
        return readerRepo.findAll();
    }
}