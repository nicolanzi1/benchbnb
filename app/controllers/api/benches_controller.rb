class Api::BenchesController < ApplicationController
  def index
    @bench = Bench.all
    render json: @bench
  end

  def create
    @bench = Bench.create!(bench_params)
    if @bench.save
      render json: @bench
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
