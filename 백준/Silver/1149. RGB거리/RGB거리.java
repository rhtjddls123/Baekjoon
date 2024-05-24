import java.util.*;

public class Main {
	static int[][] cost;
	static int[][] minCost;
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		cost = new int [N][3];
		minCost = new int[N][3];
		
		for(int i=0; i<N; i++) {
			for(int j=0; j<3; j++) {
				cost[i][j]=scan.nextInt();
			}
		}
		
		minCost[0][0] = cost[0][0];
		minCost[0][1] = cost[0][1];
		minCost[0][2] = cost[0][2];
		
		System.out.print(Math.min(resultCost(N- 1, 0), Math.min(resultCost(N - 1, 1), resultCost(N - 1, 2))));
		
	}
	
	public static int resultCost(int N, int color) {
		
		if(minCost[N][color]==0) {
			if(color==0) {
				minCost[N][0] = Math.min(resultCost(N-1, 1),resultCost(N-1,2)) + cost[N][0];
			}
			else if(color==1) {
				minCost[N][1] = Math.min(resultCost(N-1, 0),resultCost(N-1,2)) + cost[N][1];
			}
			else {
				minCost[N][2] = Math.min(resultCost(N-1, 0),resultCost(N-1,1)) + cost[N][2];
			}
		}
		
		return minCost[N][color];
	}
}