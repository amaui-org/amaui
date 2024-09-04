import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFingerprintOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FingerprintOffW100'

      short_name='FingerprintOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 459-461q-29 5-48.5 29T391-374q0 92 62 165.5T615-109l-8 27q-109-29-176.5-110T363-374q0-38 20-68t53-42l-49-49q-46 24-72 66.5T289-374q0 67 31 134t91 132l-20 20q-64-69-97-141.5T261-374q0-55 28.5-102.5T367-553l-53-53q-61 39-95 100.5T185-374q0 32 7.5 69.5T217-216l-25 12q-18-48-26.5-90t-8.5-80q0-75 36-142t101-110l-49-49q-27 19-52 44.5T143-571l-21-17q24-32 50-58.5t55-46.5L90-830l20-20L872-88l-20 20ZM673-360q0-78-53-135.5T489-556l-27-27q5-1 9.5-1h9.5q92 0 156 65.5T701-360h-28ZM481-874q66 0 130 17t122 50l-12 26q-51-32-111.5-48.5T481-846q-56 0-112 14.5T256-789l-20-20q56-32 117.5-48.5T481-874Zm-2 98q109 0 203 48.5T842-588l-25 16q-60-85-147.5-130.5T479-748q-39 0-78 7.5T326-719l-20-20q42-18 85-27.5t88-9.5Zm0 94q135 0 229.5 85T803-384q0 26-11.5 54T759-286l-20-20q17-14 26.5-36t9.5-42q0-117-86-193.5T479-654q-20 0-39.5 2.5T401-644l-23-23q24-8 49.5-11.5T479-682Zm200 514q-89 0-151.5-64T465-388h28q0 80 54 136t132 56q13 0 26.5-2t27.5-6l9 27q-18 5-33.5 7t-29.5 2Z"/>
    </Icon>
  );
});

IconMaterialFingerprintOffW100.displayName = 'AmauiIconMaterialFingerprintOffW100';

export default IconMaterialFingerprintOffW100;
