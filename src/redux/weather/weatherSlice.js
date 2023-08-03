import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getWeather = createAsyncThunk(
  'countryStates/getWeather',
  async (stateName) => {
    const key = '71c3ae42ba7c4be4b58113417233107';
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${stateName}&days=3&aqi=yes`,
    );
    const data = await response.json();
    return data.forecast.forecastday.map((day) => ({
      countryState: data.location.region,
      date: day.date,
      weatherCondition: day.day.condition.text,
      icon: day.day.condition.icon,
      temperature: day.day.avgtemp_c,
      id: Date.now(),
    }));
  },
);

const initialState = {
  weatherDetails: [],
  isLoading: true,
  hasError: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.weatherDetails = action.payload;
        state.isLoading = false;
      })
      .addCase(getWeather.rejected, (state) => {
        state.hasError = true;
      });
  },
});

export default weatherSlice.reducer;
