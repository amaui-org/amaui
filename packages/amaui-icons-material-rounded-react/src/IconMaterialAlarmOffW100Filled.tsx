import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlarmOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOffW100Filled'

      short_name='AlarmOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.075 21.4-2.95-2.95q-1.1 1.1-2.5 1.675t-2.95.575q-1.6 0-3-.6t-2.45-1.65Q5.175 17.4 4.575 16q-.6-1.4-.6-3 0-1.55.575-2.95.575-1.4 1.675-2.5L4.55 5.875l-1.4 1.4q-.1.1-.237.087-.138-.012-.238-.112Q2.55 7.125 2.55 7t.125-.25L4.05 5.375l-1.4-1.4q-.1-.1-.088-.238.013-.137.113-.237.125-.125.25-.125t.25.125L20.6 20.925q.1.1.088.238-.013.137-.113.237-.125.125-.25.125t-.25-.125Zm-1.4-5.25L8.5 5.975Q9.175 5.7 9.95 5.5q.775-.2 1.725-.2 1.6 0 3 .6t2.45 1.65q1.05 1.05 1.65 2.45.6 1.4.6 3 0 .8-.163 1.6-.162.8-.537 1.55Zm1.5-8.9L17.4 4.475q-.1-.1-.088-.238.013-.137.113-.237.125-.125.25-.125t.25.125L20.7 6.775q.1.1.088.237-.013.138-.113.238-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialAlarmOffW100Filled.displayName = 'AmauiIconMaterialAlarmOffW100Filled';

export default IconMaterialAlarmOffW100Filled;
