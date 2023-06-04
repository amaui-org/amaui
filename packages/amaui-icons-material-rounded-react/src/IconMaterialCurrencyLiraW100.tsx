import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyLiraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyLiraW100'

      short_name='CurrencyLira'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.4 19.7q-.325 0-.537-.213-.213-.212-.213-.537v-4.275L7.2 16.2q-.2.125-.375.012-.175-.112-.175-.312 0-.1.05-.175.05-.075.125-.125l2.825-1.775V9.95L7.175 11.5q-.175.125-.35.012-.175-.112-.175-.312 0-.1.038-.175.037-.075.112-.125l2.85-1.8V4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.025L13.825 6.5q.175-.125.35-.013.175.113.175.313 0 .1-.05.175-.05.075-.125.125L10.35 9.525V13.4l3.475-2.175q.175-.125.35-.013.175.113.175.313 0 .1-.05.175-.05.075-.125.125L10.35 14.25V19H11q2 0 3.6-1.262 1.6-1.263 1.95-3.413.025-.125.138-.225.112-.1.237-.1.175 0 .275.113.1.112.075.262-.35 2.3-2.1 3.813Q13.425 19.7 11 19.7Z"/>
    </Icon>
  );
});

IconMaterialCurrencyLiraW100.displayName = 'AmauiIconMaterialCurrencyLiraW100';

export default IconMaterialCurrencyLiraW100;
