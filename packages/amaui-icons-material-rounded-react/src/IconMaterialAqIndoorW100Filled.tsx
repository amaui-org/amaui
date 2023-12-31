import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAqIndoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AqIndoorW100Filled'

      short_name='AqIndoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m362-442 19-52h4l19 52h-42Zm206 43q-23-1-39.5-16.98Q512-431.959 512-455q0-23.878 16.59-40.439T568.09-512q22.91 0 39.41 16.427 16.5 16.427 16.5 40.112 0 11.461-4.5 20.961Q615-425 609-417l-10-15q-3-5-8.5-6t-10.5 2.429Q575-433 574.5-428t2.5 10l10 15q-4.75 2-9.161 3-4.41 1-9.839 1Zm-215.277-16H414l11 31q2 5 5 7t8 2q8 0 12.5-5.5T452-394l-51.188-134.371Q400-530 389.111-536H379q-1 0-12 8l-51 135q-2 7 1.5 12.5T329-375q5 0 8-2t5-7l10.723-31Zm215.224 44Q577-371 586-372.5t16.944-6.5l5.056 7q3 5 8 5.5t10-2.929q5-2.571 6-7.571t-2-10l-5-6q13.5-12 20.25-28t6.75-33.984q0-35.151-24.466-60.083Q603.068-540 568-540q-34.588 0-59.294 24.5Q484-491 484-455t24.69 60q24.691 24 59.257 24ZM272-212q-24.75 0-42.375-17.625T212-272v-312q0-14.25 6.375-27T236-632l208-157q15.68-12 35.84-12Q500-801 516-789l208 157q11.25 8.25 17.625 21T748-584v312q0 24.75-17.625 42.375T688-212H272Z"/>
    </Icon>
  );
});

IconMaterialAqIndoorW100Filled.displayName = 'AmauiIconMaterialAqIndoorW100Filled';

export default IconMaterialAqIndoorW100Filled;
