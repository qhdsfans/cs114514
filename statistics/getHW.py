import time
from myOJ import OJparser
from myCSV import CSVmaker

ojparser = OJparser()

name = 'H7'
pid = '5ceba2dbc04c49609a1a126146f0bb74'

now = time.strftime('%Y%m%d%H%M%S')
suffix = '-%s-%s.txt' % (name, now)

logfile = open('log' + suffix, 'w')
datafile = open('data' + suffix, 'w')

ojparser.parse(pid, logfile, datafile)

logfile.close()
datafile.close()

csvmaker = CSVmaker()
csvmaker.update('data' + suffix)
