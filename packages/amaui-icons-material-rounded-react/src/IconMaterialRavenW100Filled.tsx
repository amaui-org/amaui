import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRavenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RavenW100Filled'

      short_name='Raven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M257.035-729Q246-729 238.5-721.535t-7.5 18.5q0 11.035 7.465 18.535t18.5 7.5q11.035 0 18.535-7.465t7.5-18.5q0-11.035-7.465-18.535t-18.5-7.5ZM390-280l-57 135q-2.108 4.821-7.554 6.911Q320-136 315-138t-7.5-7.5Q305-151 307-156l54-128q-100-16-164.5-92.5T132-554.301V-703q0-51.562 36.719-88.281Q205.438-828 257-828q13.484 0 25.742 2.5Q295-823 307-818l149 63q9 4 9 13.5T455-728l-73 29v83l287 196H395q-48 0-81-33t-33-81q0-6-4.074-10t-9.63-4Q261-548 257-543.975q-4 4.025-4 9.975 0 25 8 47t22 40q19.929 26 48.465 40.5Q360-392 395-392h315l101 69 14 89q2 9-3.5 15.5t-14 6.5h-7q-5.5 0-10.5-3.5t-7-8.5l-22-56H529v134q0 5.95-4.035 9.975-4.035 4.025-10 4.025T505-136.025q-4-4.025-4-9.975v-134H390Z"/>
    </Icon>
  );
});

IconMaterialRavenW100Filled.displayName = 'AmauiIconMaterialRavenW100Filled';

export default IconMaterialRavenW100Filled;
