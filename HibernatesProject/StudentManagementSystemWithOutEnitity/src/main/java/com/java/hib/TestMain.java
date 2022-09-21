package com.java.hib;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class TestMain {
	public static void main(String[] args) {
        try
        {
            Configuration config=new Configuration();
            config.configure();
            System.out.println(config);
            SessionFactory sessionFactory=config.buildSessionFactory();
            Session session=sessionFactory.openSession();
            System.out.println(session);
            
            // creating Student class object
            Student s=new Student();
            s.setId(137731);
            s.setName("Omkar");
            
              // saving object of Student
              // class in the session cache
            session.save(s);
            Transaction t=session.beginTransaction();
            t.commit();
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
    }

}
