import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBalconyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BalconyW100'

      short_name='Balcony'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 11.7q-.275 0-.488-.213Q8.3 11.275 8.3 11t.212-.488Q8.725 10.3 9 10.3t.488.212q.212.213.212.488t-.212.487Q9.275 11.7 9 11.7Zm6 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm-9.2 9q-.625 0-1.062-.438Q4.3 19.825 4.3 19.2v-3.95q0-.3.2-.5t.5-.2h.3V10q0-1.4.525-2.612.525-1.213 1.438-2.126.912-.912 2.137-1.437T12 3.3q1.4 0 2.613.525 1.212.525 2.125 1.437.912.913 1.437 2.126Q18.7 8.6 18.7 10v4.55h.275q.3 0 .513.2.212.2.212.5v3.95q0 .625-.437 1.062-.438.438-1.063.438ZM5 15.25v3.95q0 .35.225.575Q5.45 20 5.8 20h1.85v-4.75ZM8.35 20h3.3v-4.75h-3.3ZM6 14.55h5.65V4.025q-2.125.05-3.887 1.712Q6 7.4 6 10Zm6.35 0H18V10q0-2.6-1.762-4.263-1.763-1.662-3.888-1.712Zm0 5.45h3.3v-4.75h-3.3Zm4 0h1.85q.35 0 .575-.225Q19 19.55 19 19.2v-3.95h-2.65Z"/>
    </Icon>
  );
});

IconMaterialBalconyW100.displayName = 'AmauiIconMaterialBalconyW100';

export default IconMaterialBalconyW100;
