import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBikeLaneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BikeLaneW100Filled'

      short_name='BikeLane'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M702-160q40 0 68.5-28.5T799-258q0-41-28.5-69.5T702-356q-41 0-70 28.5T603-258q0 41 29 69.5t70 28.5Zm0 28q-53 0-89.5-36.5T576-258q0-52 36.5-89t89.5-37q52 0 89 37t37 89q0 53-37 89.5T702-132ZM591-636q-17 0-29.5-12.5T549-678q0-17 12.5-29.5T591-720q17 0 29.5 12.5T633-678q0 17-12.5 29.5T591-636ZM408-463l76 75q5 5 7 10.5t2 11.5v132q0 6-4 10t-10 4q-6 0-10-4t-4-10v-134l-95-79q-17-14-17.5-36.5T369-522l72-72q15-14 36-15t36 15l32 32q40 40 75.5 52.5T688-496q6 0 10 4t4 10q0 6-4 10t-10 4q-47-2-90-22t-75-54l-17-17-98 98ZM258-160q41 0 69.5-28.5T356-258q0-41-28.5-69.5T258-356q-41 0-69.5 28.5T160-258q0 41 28.5 69.5T258-160Zm-66-536-30-29q-5-5-10-5t-10 5q-5 5-5 10.5t5 10.5l28 28q9 9 21 9t21-9l82-82q4-4 4.5-9.5T294-778q-5-5-10-5t-10 5l-82 82Zm66 564q-52 0-89-36.5T132-258q0-52 37-89t89-37q53 0 89.5 37t36.5 89q0 53-36.5 89.5T258-132Zm-40-421q-5 0-10-.5t-10-2.5q-49-20-77.5-65T92-723v-75q0-9 5-17t14-11l85-34q11-4 22-4t22 4l85 34q9 3 14 11t5 17v75q0 57-28.5 102T238-556q-5 2-10 2.5t-10 .5Z"/>
    </Icon>
  );
});

IconMaterialBikeLaneW100Filled.displayName = 'AmauiIconMaterialBikeLaneW100Filled';

export default IconMaterialBikeLaneW100Filled;
