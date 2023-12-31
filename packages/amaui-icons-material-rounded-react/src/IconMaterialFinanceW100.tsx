import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFinanceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FinanceW100'

      short_name='Finance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M206-172q-26 0-43-17t-17-43v-594q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v594q0 12 10 22t22 10h594q5.95 0 9.975 4.035 4.025 4.035 4.025 10T809.975-176q-4.025 4-9.975 4H206Zm132-146q-11.05 0-18.525-7.475Q312-332.95 312-344v-220q0-11.05 7.475-18.525Q326.95-590 338-590q12.75 0 21.375 8.702T368-559.733v211.87q0 12.863-8.625 21.363T338-318Zm174 0q-11.05 0-18.525-7.475Q486-332.95 486-344v-416q0-12.75 8.625-21.375T516-790q11.05 0 18.525 7.475Q542-775.05 542-764v416q0 12.75-8.625 21.375T512-318Zm174 0q-11.05 0-18.525-7.475Q660-332.95 660-344v-56q0-12.75 8.625-21.375T690-430q11.05 0 18.525 7.475Q716-415.05 716-404v56q0 12.75-8.625 21.375T686-318Z"/>
    </Icon>
  );
});

IconMaterialFinanceW100.displayName = 'AmauiIconMaterialFinanceW100';

export default IconMaterialFinanceW100;
