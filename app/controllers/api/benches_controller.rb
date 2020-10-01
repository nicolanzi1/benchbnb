class Api::BenchesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    @benches = bounds ? Bench.in_bounds(bounds) : Bench.all

    if params[:minSeating] && params[:maxSeating]
      benches = benches.where(seating: seating_range)
    end

    render :index
  end

  def create
    @bench = Bench.create!(bench_params)
    render @bench
  end

  private

  def seating_range
    (params[:minSeating]..params[:maxSeating])
  end

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating)
  end

  def bounds
    params[:bounds]
  end
end
