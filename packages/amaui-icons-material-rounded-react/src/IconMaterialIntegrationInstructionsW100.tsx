import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIntegrationInstructionsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IntegrationInstructionsW100'

      short_name='IntegrationInstructions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.85 14.4q.125-.125.125-.25t-.125-.25L7.95 12l1.9-1.9q.1-.1.113-.237.012-.138-.113-.263t-.25-.125q-.125 0-.25.125l-1.875 1.875Q7.25 11.7 7.25 12q0 .3.225.525L9.35 14.4q.1.1.238.112.137.013.262-.112Zm4.3 0q.125.125.25.125t.25-.125l1.875-1.875q.225-.225.225-.525 0-.3-.225-.525L14.65 9.6q-.1-.125-.237-.125-.138 0-.263.125t-.125.25q0 .125.125.25l1.9 1.9-1.9 1.9q-.1.125-.1.25t.1.25ZM5.8 19h12.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q18.5 5 18.2 5H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25ZM5 5V19 5Zm.8 14.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h4.85q-.275-.725.15-1.363.425-.637 1.2-.637.8 0 1.225.637.425.638.125 1.363h4.85q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialIntegrationInstructionsW100.displayName = 'AmauiIconMaterialIntegrationInstructionsW100';

export default IconMaterialIntegrationInstructionsW100;
