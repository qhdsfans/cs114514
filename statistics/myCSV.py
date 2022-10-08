import csv, os

class CSVmaker:
    def update(self, path):
        scores = []
        with open(path, 'r') as f:
            for line in f.readlines():
                data = line.split()
                if len(data) == 0: continue
                userid = int(data[1])
                username= data[3]
                score = 0 if data[4] == 'None' else int(data[4])
                scores.append((userid, username, score))
        scores.sort()
        if os.path.exists('scores.csv'):
            with open('scores.csv', mode='a', newline='') as csvfile:
                writer = csv.writer(csvfile)
                writer.writerow(map(lambda x: x[2], scores))
        else:
            with open('scores.csv', mode='w', newline='') as csvfile:
                writer = csv.writer(csvfile)
                writer.writerow(map(lambda x: x[0], scores))
                writer.writerow(map(lambda x: x[1], scores))
                writer.writerow(map(lambda x: x[2], scores))
