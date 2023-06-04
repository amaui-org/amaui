import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBathOutdoorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BathOutdoorW100'

      short_name='BathOutdoor'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M244 592v31q-20 14-30 30t-10 31v5.5q0 2.5 1 5.5l139 28 7 18 46-18h128l26 34 103-16 36-52h66v-5q0-15-10-31t-30-30v-31q33 20 50.5 44.5T784 685q0 2-.5 4.5t-.5 4.5l25 37-30 88H666l5 22-74 30H369l-9-25-99 24-110-79v-72l28-14q-2-5-2.5-10t-.5-10q0-24 17.5-48.5T244 592Zm-33 205 49-48-53-27-28 14v40l32 21Zm57 42 82-19-25-69h-29l-61 62 33 26Zm120 4h119l29-59-25-33H402l-41 17 27 75Zm150 0h54l46-19-10-51-56 9-34 61Zm116-51h105l19-58-12-17h-61l-51 75ZM333 620q2-10 2.5-17t.5-15q0-35-15-59t-34-48q-27-35-38-64t-11-62q0-10 .5-20.5T241 312h28q-2 11-2.5 21t-.5 19q0 40 15.5 67t33.5 52q28 37 38.5 63t10.5 56q0 8-.5 15t-2.5 15h-28Zm130 0q2-10 2.5-17t.5-15q0-35-15-59t-34-48q-27-35-38-64t-11-62q0-10 .5-20.5T371 312h28q-2 11-3 21t-1 19q0 40 15.5 67t33.5 52q28 37 38.5 63t10.5 56v15q0 7-2 15h-28Zm130 0q2-10 2.5-17t.5-15q0-35-15-59t-34-48q-27-35-38-64t-11-62q0-10 .5-20.5T501 312h28q-2 11-3 21t-1 19q0 40 15.5 67t33.5 52q28 37 38.5 63t10.5 56v15q0 7-2 15h-28Z"/>
    </Icon>
  );
});

IconMaterialBathOutdoorW100.displayName = 'AmauiIconMaterialBathOutdoorW100';

export default IconMaterialBathOutdoorW100;
