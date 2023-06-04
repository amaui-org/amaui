import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForward5W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forward5W100'

      short_name='Forward5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.25 15.6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65v-1.55h-2.25q-.325 0-.537-.213-.213-.212-.213-.537v-1.45q0-.325.213-.538.212-.212.537-.212h2.6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H10.6v1.55H13q.25 0 .425.175t.175.425V15q0 .25-.175.425T13 15.6ZM12 20.7q-1.6 0-3-.6t-2.45-1.65Q5.5 17.4 4.9 16q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q7.6 6.5 9 5.9q1.4-.6 3-.6h.45L11 3.85q-.125-.125-.125-.25T11 3.35q.125-.125.25-.125t.25.125l1.775 1.75q.125.1.175.237.05.138.05.288 0 .125-.05.262-.05.138-.175.263L11.55 7.9q-.125.125-.25.125t-.25-.125q-.125-.125-.125-.25t.125-.25l1.4-1.4H12Q9.075 6 7.038 8.037 5 10.075 5 13q0 2.925 2.038 4.962Q9.075 20 12 20q2.825 0 4.85-1.925Q18.875 16.15 19 13.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25q-.125 3.1-2.35 5.225Q15.125 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialForward5W100.displayName = 'AmauiIconMaterialForward5W100';

export default IconMaterialForward5W100;
