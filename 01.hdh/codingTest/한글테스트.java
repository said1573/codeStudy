public class 한글테스트 {

    private String 한글 = "test";




    public static void main(String[] args) {

        한글테스트 java = new 한글테스트();
        System.out.println(java.get한글());
    }

    public String get한글() {
        System.out.println("!!!");
        return 한글;
    }

    public void set한글(String 한글) {
        this.한글 = 한글;
    }
}
