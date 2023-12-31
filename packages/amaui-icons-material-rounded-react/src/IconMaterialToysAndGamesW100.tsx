import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToysAndGamesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysAndGamesW100'

      short_name='ToysAndGames'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-226q0-12 5-17t11-5q3 0 7 1t7 3q8 3 17.5 4.5T240-238q50 0 85-36t35-86q0-50-35-84t-85-34q-8 0-16 1t-16 3q-8 2-12.5 2H188q-6 0-11-5.5t-5-14.5v-68q0-12 8-20t20-8h182q11 0 11.5-8t-7.5-16q-15-15-24.5-35t-9.5-53q0-54 37-91t91-37q54 0 91 37t37 91q0 33-9.5 53T574-612q-8 8-7.5 16t11.5 8h182q12 0 20 8t8 20v46q0 12-3.5 27T772-472h-14q-5 0-10-2t-10.5-3q-5.5-1-17.5-1-50 0-85 34t-35 84q0 50 35 86t85 36q12 0 20-1.5t16-4.5q5-2 8-3t8-1q6 0 11 5.5t5 16.5v66q0 12-8 20t-20 8H200q-12 0-20-8t-8-20v-66Zm28 66h560v-56q-9 3-19 4.5t-21 1.5q-62 0-105-44t-43-106q0-62 43-104t105-42q11 0 21 1.5t19 4.5v-60H578q-17 0-28.5-10.5T538-598q0-9 4-18t10-14q17-12 22.5-30.5T580-700q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 21 5.5 39.5T408-630q5 3 9.5 12.5T422-600q0 17-11.5 28.5T382-560H200v60q9-3 19-4.5t21-1.5q62 0 105 42t43 104q0 62-43 106t-105 44q-11 0-21-1.5t-19-4.5v56Zm280-320Z"/>
    </Icon>
  );
});

IconMaterialToysAndGamesW100.displayName = 'AmauiIconMaterialToysAndGamesW100';

export default IconMaterialToysAndGamesW100;
