import java.util.Scanner;

public class Main {
	String a = "ACAYKP";
	String b = "CAPCAK";
	int lcs[][];
	String c = "";
	
	public Main(String a, String b) {
		this.a = a;
		this.b = b;
		lcs = new int[a.length() + 1][b.length() + 1];
		run();
	}

	public void run() {
		lcsRun();
		lcsPrint();
		print();
	}

	public void lcsRun() {
		for (int i = 1; i < lcs.length; i++) {
			for (int j = 1; j < lcs[i].length; j++) {
				if (a.charAt(i - 1) == b.charAt(j - 1)) {
					lcs[i][j] = lcs[i - 1][j - 1] + 1;
				} else {
					lcs[i][j] = Math.max(lcs[i][j - 1], lcs[i - 1][j]);
				}
			}
		}
	}

	public void lcsPrint() {
		int i = lcs.length - 1;
		int j = lcs[i].length - 1;
		while (true) {
			if (a.charAt(i - 1) == b.charAt(j - 1)) {
				c += a.charAt(i - 1);
				i--;
				j--;
			} else {
				if (lcs[i][j - 1] > lcs[i - 1][j]) {
					j--;
				} else {
					i--;
				}
			}
			if (i == 0 || j == 0) {
				break;
			}
		}
	}

	public void print() {
		System.out.println(lcs[a.length()][b.length()]);
		for (int i = c.length() - 1; i >= 0; i--) {
			System.out.print(c.charAt(i));
		}
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String a = scan.next();
		String b = scan.next();
		Main lcs = new Main(a,b);
	}
}
