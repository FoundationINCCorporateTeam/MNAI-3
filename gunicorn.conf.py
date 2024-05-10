bind = "0.0.0.0:10000"  # Bind to host 0.0.0.0 and port 10000
workers = 2  # Number of Gunicorn worker processes
timeout = 30  # Timeout for handling requests (in seconds)
accesslog = '-'  # Log to stdout
errorlog = '-'  # Log to stderr
