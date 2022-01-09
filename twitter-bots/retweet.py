import tweepy
import time
from config import create_api


def retweetBot(api, hashtag, tweetNumber):
    tweets = tweepy.Cursor(api.search, hashtag).items(tweetNumber)
    for tweet in tweets:
        try:
            tweet.retweet()
            # To know that script is running, print what has been done
            print(tweet.id, " - Retweet done!")
            if tweet.id % 2 == 0:
                api.create_favorite(tweet.id)
                print("And favorited!")
            time.sleep(5)
        except tweepy.TweepError as e:
            print(e.reason)
            time.sleep(3)


def main():
    api = create_api()
    hashtag = "#WHAT_YOU_WANT_TO_RETWEET"
    tweetNumber = 10
    while True:
        retweetBot(api, hashtag, tweetNumber)
        time.sleep(200)


if __name__ == "__main__":
    main()
