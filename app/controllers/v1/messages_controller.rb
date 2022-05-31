class V1::MessagesController < ApplicationController
    def index
      @greeting = Message.order('RANDOM()').first
      render json: { greetings: @greeting }.to_json
    end
  end