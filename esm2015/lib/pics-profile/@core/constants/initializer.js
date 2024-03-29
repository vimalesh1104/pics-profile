export const initializeObject = (target, source) => {
    if (target === undefined || source === undefined) {
        return;
    }
    Object.keys(source).forEach((key) => {
        target[key] = source[key];
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcHJvZmlsZS9zcmMvbGliL3BpY3MtcHJvZmlsZS9AY29yZS9jb25zdGFudHMvaW5pdGlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBbUIsTUFBVyxFQUFFLE1BQVcsRUFBRSxFQUFFO0lBQzdFLElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1FBQ2hELE9BQU87S0FDUjtJQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7UUFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsaXplT2JqZWN0ID0gPFRUYXJnZXQsIFRTb3VyY2U+KHRhcmdldDogYW55LCBzb3VyY2U6IGFueSkgPT4ge1xyXG4gIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCB8fCBzb3VyY2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKGtleTogYW55KSA9PiB7XHJcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gIH0pO1xyXG59O1xyXG4iXX0=