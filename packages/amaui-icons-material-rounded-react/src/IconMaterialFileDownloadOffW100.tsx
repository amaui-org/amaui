import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileDownloadOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadOffW100'

      short_name='FileDownloadOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.6 20.6-1.95-1.95q-.125.025-.225.038-.1.012-.225.012H6.8q-.65 0-1.075-.425Q5.3 17.85 5.3 17.2v-1.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.85q0 .3.25.55.25.25.55.25H17l-4-4-.475.475q-.125.125-.237.175-.113.05-.288.05t-.287-.05q-.113-.05-.238-.175L9.15 12.15q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l1.75 1.75v-1l-8-8q-.125-.125-.125-.25T3.4 3.9q.125-.125.25-.125t.25.125l16.2 16.2q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125Zm-.9-4.7-.675-.675q.05-.125.125-.175.075-.05.2-.05.15 0 .25.1t.1.25Zm-3.8-3.8-.5-.5.025-.025q.05-.05.175-.05.125 0 .25.125t.125.25q0 .125-.05.175Zm-2.55-2.55-.7-.7V5.2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadOffW100.displayName = 'AmauiIconMaterialFileDownloadOffW100';

export default IconMaterialFileDownloadOffW100;
