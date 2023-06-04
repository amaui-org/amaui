import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPestControlRodentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PestControlRodentW100Filled'

      short_name='PestControlRodent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.175 19.9q-1.975 0-3.387-1.35-1.413-1.35-1.488-3.3-1.525-.35-2.512-1.55-.988-1.2-.988-2.775 0-1.75 1.175-3.013Q6.15 6.65 7.875 6.65h2.775q.475 0 .813-.338.337-.337.337-.812 0-.475-.337-.813-.338-.337-.813-.337H8.8v-.7h1.85q.775 0 1.313.537.537.538.537 1.313 0 .775-.537 1.312-.538.538-1.313.538H7.875q-1.425 0-2.4 1.05Q4.5 9.45 4.5 10.925q0 1.275.787 2.25.788.975 2.038 1.325.2-1.85 1.513-3.113 1.312-1.262 3.137-1.262.475 0 .938.075.462.075.887.25-.875.5-1.425 1.325t-.55 1.825q0 .575.163 1.125.162.55.512.975l.275-.2q-.325-.425-.463-.913-.137-.487-.137-.987 0-1.325.938-2.238.937-.912 2.262-.912t2.238.912q.912.913.912 2.238 0 .425-.1.85t-.325.8l1.95 1.9q.325.275.537.625.213.35.213.775 0 .6-.512.975-.513.375-1.163.375ZM17 17.7q.275 0 .488-.213.212-.212.212-.487t-.212-.487Q17.275 16.3 17 16.3t-.487.213q-.213.212-.213.487t.213.487q.212.213.487.213Z"/>
    </Icon>
  );
});

IconMaterialPestControlRodentW100Filled.displayName = 'AmauiIconMaterialPestControlRodentW100Filled';

export default IconMaterialPestControlRodentW100Filled;
