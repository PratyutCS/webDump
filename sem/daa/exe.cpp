#include <iostream>

#include <fstream>

#include <algorithm>

#include <string>

#include <vector>

#include <bits/stdc++.h>

using namespace std;





void pf(string str)

{

    map<string, int> M;

 

    string word = "";

 

    for (int i = 0; i < str.size(); i++) {

        if (str[i] == ' ') {

            if (M.find(word) == M.end()) {

                M.insert(make_pair(word, 1));

                word = "";

            }

            else {

                M[word]++;

                word = "";

            }

        }

        else

            word += str[i];

    }

    if (M.find(word) == M.end())

        M.insert(make_pair(word, 1));

    else

        M[word]++;

    for (auto& it : M) {

        cout << it.first << " - " << it.second << endl;

    }

}





int main(){

	ifstream file1,file2;

	

	string cont,cont1="",cont2="";

	

	file1.open("log1.txt");

	file2.open("log2.txt");

	

	if(file1.is_open()){

		while (getline (file1, cont)) {

			cont1+=cont+" ";

		}

	}

	file1.close();

	

	if(file2.is_open()){

		while (getline (file2, cont)) {

			cont2+=cont+" ";

		}

	}

	file2.close();

	cout<<cont1<<endl;

	cout<<cont2<<endl;

	pf(cont1);

	pf(cont2);

	return 0;

}