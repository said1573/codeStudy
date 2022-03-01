import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Test {
    public static void main(String[] args) {

        String number = "211020101011";

        String regEx = "0[0-9]+0";

        Pattern pattern = Pattern.compile(regEx);
        Matcher matcher = pattern.matcher(number);

        while (matcher.find()) {
            System.out.println(matcher.group());

        }

    }
}
