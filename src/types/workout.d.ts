declare interface Workout {
  id: number;
  dateCreated: Date;
  date: Date;
  caloriesBurned: number;
  muscleGroups: MuscleGroup[];
  unit: 'lb' | 'kg';
  exercisesPerMuscle: ExercisesPerMuscle[];
}

declare interface ExercisesPerMuscle {
  targetMuscleId: number;
  targetMuscle: string;
  exercises: Exercise[];
}

declare interface Exercise {
  targetMuscle: number;
  name: string;
  sets: ExerciseSet[];
  pr: string;
}

declare interface ExerciseSet {
  reps: number;
  weight: number;
  isPersonalRecord: boolean;
}
