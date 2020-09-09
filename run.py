#!/usr/bin/env python3


from subprocess import call
import sys

if sys.argv[1] == 'up':
    call(['bash', '-c', 'docker-compose -f docker-compose.yml up '])
elif sys.argv[1] == 'down':
    call(['bash', '-c', 'docker-compose -f docker-compose.yml down'])
if sys.argv[1] == 'build':
    call(['bash', '-c', 'docker-compose -f docker-compose.yml build '])
elif sys.argv[1] == 'log':
    call(['bash', '-c', 'docker-compose -f docker-compose.yml logs --follow tictactoe-front'])
elif sys.argv[1] == 'bash':
    call(['bash', '-c', 'docker-compose -f docker-compose.yml exec tictactoe-front bash'])
else:
    print('oh snap!')

