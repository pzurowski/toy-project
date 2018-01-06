import {NgModule} from '@angular/core';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {ActionReducerMap, StoreModule} from '@ngrx/store';

import {storeFreeze} from 'ngrx-store-freeze';

import {environment} from '../environments/environment';
import {CounterEffects, counterReducer, CounterService, CounterState} from './counter.redux';


export interface State {
	counter: CounterState;
}

const reducers: ActionReducerMap<State> = {
	counter: counterReducer,
};

const effects = [
	CounterEffects,
];

@NgModule({
	imports: [
		StoreModule.forRoot(reducers, {metaReducers: environment.production ? [] : [storeFreeze]}),
		environment.production ? [] : StoreDevtoolsModule.instrument({maxAge: 25}),
		EffectsModule.forRoot(effects),
	],
	providers: [
		CounterService,
	]
})
export class AppReduxModule {

}
