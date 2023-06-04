import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudOffW100'

      short_name='CloudOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.7 17.85-.5-.5q.375-.375.588-.825.212-.45.212-1.025 0-1.05-.725-1.775Q19.55 13 18.5 13H17v-2q0-2.075-1.462-3.538Q14.075 6 12 6q-.675 0-1.3.162-.625.163-1.2.513L9 6.15q.875-.5 1.538-.675Q11.2 5.3 12 5.3q2.375 0 4.038 1.663Q17.7 8.625 17.7 11v1.3h.8q1.35 0 2.275.925.925.925.925 2.275 0 .6-.212 1.188-.213.587-.788 1.162Zm-.3 3.55-2.65-2.7H6.5q-1.775 0-2.987-1.213Q2.3 16.275 2.3 14.5q0-1.8 1.238-3 1.237-1.2 2.812-1.2 0-.425.225-1.088Q6.8 8.55 7.1 8.1L3.55 4.55q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125L20.9 20.9q.1.1.113.237.012.138-.113.263t-.262.125q-.138 0-.238-.125ZM6.5 18H17L7.6 8.6q-.275.45-.438 1.1Q7 10.35 7 11h-.5q-1.45 0-2.475 1.025Q3 13.05 3 14.5q0 1.45 1.025 2.475Q5.05 18 6.5 18Zm8.35-5.975Zm-2.575 1.25Z"/>
    </Icon>
  );
});

IconMaterialCloudOffW100.displayName = 'AmauiIconMaterialCloudOffW100';

export default IconMaterialCloudOffW100;
