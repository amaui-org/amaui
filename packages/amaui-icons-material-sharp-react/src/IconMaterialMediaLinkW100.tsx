import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaLinkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaLinkW100'

      short_name='MediaLink'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.825 18.6v-4.45l3.575 2.225ZM13 9.5q-1.075 0-1.837-.763Q10.4 7.975 10.4 6.9t.763-1.838Q11.925 4.3 13 4.3h.85V5H13q-.8 0-1.35.55T11.1 6.9q0 .8.55 1.35T13 8.8h.85v.7Zm3.15 0v-.7H17q.8 0 1.35-.55t.55-1.35q0-.8-.55-1.35T17 5h-.85v-.7H17q1.075 0 1.837.762.763.763.763 1.838 0 1.075-.763 1.837Q18.075 9.5 17 9.5ZM13.4 7.25v-.7h3.2v.7Zm1.975 5.575v-.7H21v-9H9v8.25h-.7v-8.95h13.4v10.4ZM2.3 21.575v-10.4h13.4v10.4Zm.7-.7h12v-9H3Zm12-13.25Zm-6 8.75Z"/>
    </Icon>
  );
});

IconMaterialMediaLinkW100.displayName = 'AmauiIconMaterialMediaLinkW100';

export default IconMaterialMediaLinkW100;
