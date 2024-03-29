import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flight'

      short_name='Flight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 21.725q-.425.125-.712-.1-.288-.225-.288-.65 0-.2.113-.413.112-.212.262-.337L10.5 19v-5.5l-7.225 2.125q-.525.15-.9-.125T2 14.65q0-.275.163-.563.162-.287.412-.412L10.5 9V3.5q0-.65.425-1.075Q11.35 2 12 2q.65 0 1.075.425.425.425.425 1.075V9l7.925 4.675q.25.125.412.425.163.3.163.575 0 .55-.375.825-.375.275-.9.125L13.5 13.5V19l1.625 1.225q.15.125.262.337.113.213.113.413 0 .425-.287.65-.288.225-.713.1L12 21Z"/>
    </Icon>
  );
});

IconMaterialFlight.displayName = 'AmauiIconMaterialFlight';

export default IconMaterialFlight;
