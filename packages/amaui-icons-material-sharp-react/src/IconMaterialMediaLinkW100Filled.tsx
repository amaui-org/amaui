import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaLinkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaLinkW100Filled'

      short_name='MediaLink'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.825 18.6 3.575-2.225-3.575-2.225ZM13.4 7.25h3.2v-.7h-3.2ZM2.3 21.575v-10.4h13.4v10.4Zm15.4-8.75V9.4q.825-.225 1.362-.912Q19.6 7.8 19.6 6.9q0-1.075-.763-1.838Q18.075 4.3 17 4.3h-.85V5H17q.8 0 1.35.55t.55 1.35q0 .8-.55 1.35T17 8.8h-.85v.375h-2.3V8.8H13q-.8 0-1.35-.55T11.1 6.9q0-.8.55-1.35T13 5h.85v-.7H13q-1.075 0-1.837.762-.763.763-.763 1.838 0 .725.375 1.325t.975.95H8.3v-6.75h13.4v10.4Z"/>
    </Icon>
  );
});

IconMaterialMediaLinkW100Filled.displayName = 'AmauiIconMaterialMediaLinkW100Filled';

export default IconMaterialMediaLinkW100Filled;
