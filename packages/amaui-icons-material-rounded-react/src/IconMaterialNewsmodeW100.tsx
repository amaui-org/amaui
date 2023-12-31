import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewsmodeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewsmodeW100'

      short_name='Newsmode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h576q26 0 43 17t17 43v496q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-496q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm102-120h372q6 0 10-4t4-10q0-6-4-10t-10-4H294q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-146h100q6 0 10-4t4-10v-146q0-6-4-10t-10-4H294q-6 0-10 4t-4 10v146q0 6 4 10t10 4Zm228 0h144q6 0 10-4t4-10q0-6-4-10t-10-4H522q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-146h144q6 0 10-4t4-10q0-6-4-10t-10-4H522q-6 0-10 4t-4 10q0 6 4 10t10 4ZM160-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialNewsmodeW100.displayName = 'AmauiIconMaterialNewsmodeW100';

export default IconMaterialNewsmodeW100;
