package com.example.backend.services;

import com.example.backend.dto.response.TwitterResponseDto;
import com.twitter.clientlib.ApiException;
import com.twitter.clientlib.TwitterCredentialsBearer;
import com.twitter.clientlib.api.TwitterApi;
import com.twitter.clientlib.model.MultiTweetLookupResponse;
import com.twitter.clientlib.model.ResourceUnauthorizedProblem;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class TwitterService {
    private TwitterResponseDto twitterResponseDto = null;

    public TwitterResponseDto getTweets(){
        twitterResponseDto = new TwitterResponseDto();
        TwitterApi apiInstance = new TwitterApi();
        TwitterCredentialsBearer credentials = new TwitterCredentialsBearer(System.getenv("BEARER_TOKEN"));
        apiInstance.setTwitterCredentials(credentials);

        Set<String> tweetFields = new HashSet<>();
        tweetFields.add("author_id");
        tweetFields.add("id");
        tweetFields.add("created_at");
        tweetFields.add("lang");

        try{
            List<String> tweetIds = new ArrayList<>();
            tweetIds.add("1527646633336442880");
            tweetIds.add("1527166873795760128");
            tweetIds.add("1527628528153395200");
            tweetIds.add("1527861771834384386");
            tweetIds.add("1529605036594143235");
            tweetIds.add("1529401235148877824");

            MultiTweetLookupResponse result = apiInstance.tweets().findTweetsById(tweetIds, null, tweetFields, null, null,null,null);
            if(result.getErrors()!=null && result.getErrors().size()>0){
                System.out.println("Error:");

                result.getErrors().forEach(e -> {
                    System.out.println(e.toString());
                    if (e instanceof ResourceUnauthorizedProblem) {
                        System.out.println(e.getTitle() + " " + e.getDetail());
                    }
                });
            }
            else {
                System.out.println("findTweetById - Tweet Text: " + result);
                twitterResponseDto.setResponse(result);
                return twitterResponseDto;
            }
        }
        catch (ApiException e) {
                System.err.println("Status code: " + e.getCode());
                System.err.println("Reason: " + e.getResponseBody());
                System.err.println("Response headers: " + e.getResponseHeaders());
                e.printStackTrace();
        }
        return null;
    }
}