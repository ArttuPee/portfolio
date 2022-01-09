import tweepy
import time
from config import create_api


def follow_followers(api):
    print("Retrieving and following followers")
    for follower in tweepy.Cursor(api.followers).items():
        if not follower.following:
            try:
                follower.follow()
                print("Followed")
                time.sleep(1)
            except:
                print("Error")


def main():
    api = create_api()
    while True:
        follow_followers(api)
        print("Waiting...")
        time.sleep(300)


if __name__ == "__main__":
    main()
