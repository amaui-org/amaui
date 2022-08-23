import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileDownloadRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadRoundedW100Filled'
      short_name='FileDownload'

      {...props}
    >
      <path d="M12 14.7Q11.85 14.7 11.725 14.65Q11.6 14.6 11.475 14.475L9.15 12.15Q9.05 12.05 9.038 11.912Q9.025 11.775 9.15 11.65Q9.275 11.525 9.4 11.525Q9.525 11.525 9.65 11.65L11.65 13.65V5.2Q11.65 5.05 11.75 4.95Q11.85 4.85 12 4.85Q12.15 4.85 12.25 4.95Q12.35 5.05 12.35 5.2V13.65L14.35 11.65Q14.45 11.55 14.588 11.537Q14.725 11.525 14.85 11.65Q14.975 11.775 14.975 11.9Q14.975 12.025 14.85 12.15L12.525 14.475Q12.4 14.6 12.275 14.65Q12.15 14.7 12 14.7ZM6.8 18.7Q6.15 18.7 5.725 18.275Q5.3 17.85 5.3 17.2V15.35Q5.3 15.2 5.4 15.1Q5.5 15 5.65 15Q5.8 15 5.9 15.1Q6 15.2 6 15.35V17.2Q6 17.5 6.25 17.75Q6.5 18 6.8 18H17.2Q17.5 18 17.75 17.75Q18 17.5 18 17.2V15.35Q18 15.2 18.1 15.1Q18.2 15 18.35 15Q18.5 15 18.6 15.1Q18.7 15.2 18.7 15.35V17.2Q18.7 17.85 18.275 18.275Q17.85 18.7 17.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadRoundedW100Filled.displayName = 'AmauiIconMaterialFileDownloadRoundedW100Filled';

export default IconMaterialFileDownloadRoundedW100Filled;
