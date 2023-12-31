import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReminderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReminderW100Filled'

      short_name='Reminder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M270-588h66v-66q0-27-19.5-46.5T270-720q-27 0-46.5 19.5T204-654q0 27 19.5 46.5T270-588Zm160 0q27 0 46.5-19.5T496-654q0-27-19.5-46.5T430-720q-27 0-46.5 19.5T364-654v66h66Zm-66 96h294q37.5 0 63.75 26.25T748-402v135.929Q748-210 708.344-171T613-132H455q-34 0-65-14t-51-41L165-420q-3-5-3-10t4-9q7-8 16.5-10t18.5 3l135 64v-178h-66q-39.167 0-66.583-27.382Q176-614.765 176-653.882 176-693 203.417-720.5 230.833-748 270-748q19.433 0 36.217 7Q323-734 336-721v-93q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v93q13-13 30.078-20T430-748q39.167 0 66.583 27.382Q524-693.235 524-654.118 524-615 496.583-587.5 469.167-560 430-560h-66v68Z"/>
    </Icon>
  );
});

IconMaterialReminderW100Filled.displayName = 'AmauiIconMaterialReminderW100Filled';

export default IconMaterialReminderW100Filled;
