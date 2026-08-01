#include <stdio.h>
int insert_L(int a[],int i,int x,int n)
{  int j;
   for(j=n-1;j>=i-1;j--)
   a[j+1]=a[j];
    a[j+1]=x;
   n++;
   return n;
  }
 int del_L(int a[],int i,int n) 
 { int j;
   for(j=i-1;j<=n-1;j++)
     a[j]=a[j+1];
   n--;
   return n;
  }
 void loc_L(int a[],int x,int n)
 {
   int j;
   for(j=0;j<n;j++)
    if(a[j]==x)
	{ 
		printf("%d", j);
	break;}
    if(j==n)
     printf("no found");
  }
void travel_L(int a[],int n)
{
  int j;
  for(j=0;j<n-1;j++)
  printf("%3d",a[j]);
  printf("\n");
 }
void main()
{  int a[10]={1,2,3,4,5,6,7,8,9,10};
   int x,k,lo=10,elem;
   printf("请输入你的操作1为插入，2为删除，3为查找");
   scanf("%d",&x);
   if(x==1)
     {printf("please read the insert position and the element\n");
      scanf("%d %d",&k,&elem);
      lo=insert_L(a,k,elem,lo);
      travel_L(a,lo);
     }

  if(x==2)
     {printf("please input the position of deleting\n");
      scanf("%d",&k);
      lo=del_L(a,k,lo);
      travel_L(a,lo);
       }
  if(x==3)
    { printf("please input the element which you will search\n");
      scanf("%d",&x);
     loc_L(a,x,lo);}

}




