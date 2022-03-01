package chap13;

public class Container<E> {
    private E e;

    public void set(E e) {
        this.e = e;
    }

    public E get() {
        return e;
    }
}
