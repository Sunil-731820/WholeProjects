package JAVAProjects.Basic;

public class MainThread {
    public static void main(String[] args) {
        Thread th1 = new Thread();
        Thread th2 = new Thread();
        Thread th3 = new Thread();
        Thread th4 = new Thread();
        th1.setName("core Java");
        // System.out.println(th.getName());
        th1.start();
        // System.out.println(th.activeCount());
        // Thread.currentThread().join();

    }
}
