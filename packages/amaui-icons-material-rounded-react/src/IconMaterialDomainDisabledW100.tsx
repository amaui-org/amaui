import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDomainDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainDisabledW100'

      short_name='DomainDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.05 17.85-.7-.7V7.9H11.1l-.15-.15V3.9h-3.9l-.7-.7h4.6q.275 0 .488.212.212.213.212.488v3.3h8.7q.275 0 .487.212.213.213.213.488ZM3.65 19.9q-.275 0-.487-.212-.213-.213-.213-.488V3.25l-1.4-1.4q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125L22.4 21.7q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125l-2.3-2.3Zm0-.7h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm4 8h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm4 4h7.25l-3.3-3.3h-3.95Zm5.7-7.3h-.7v-.7h.7Z"/>
    </Icon>
  );
});

IconMaterialDomainDisabledW100.displayName = 'AmauiIconMaterialDomainDisabledW100';

export default IconMaterialDomainDisabledW100;
