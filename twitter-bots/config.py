import tweepy
import logging

logger = logging.getLogger()

def create_api():
    consumer_key = "TWITTER-API-KEY"
    consumer_secret = "TWITTER-API-KEY"
    access_token = "TWITTER-API-KEY"
    access_token_secret = "TWITTER-API-KEY"

    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    api = tweepy.API(auth, wait_on_rate_limit=True,
        wait_on_rate_limit_notify=True)
    try:
        api.verify_credentials()
    except Exception as e:
        logger.error("Error creating API", exc_info=True)
        raise e
    logger.info("API created")
    return api