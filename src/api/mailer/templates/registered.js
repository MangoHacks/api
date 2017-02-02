export default function({firstname}){
	return `
		<mjml>
		  <mj-body>
		    <mj-container background-color="#ffffff" font-size="13px">
		      <mj-section hidden="false" locked="true" full-width="full-width" padding-bottom="20" padding-top="20">
		        <mj-column vertical-align="middle" width="66.66666666666666%">
		          <mj-text align="left" color="#000000" font-size="11" word-wrap="break-word" font-family="Ubuntu, Helvetica, Arial, sans-serif" locked="true" editable="true" vertical-align="middle" padding-left="25" padding-right="25" padding-bottom="0" padding-top="0">
		            <span style="font-size: 11px">[[HEADLINE]]</span>
		          </mj-text>
		        </mj-column>
		        <mj-column vertical-align="middle" width="33.33333333333333%">
		          <mj-text align="right" color="#000000" font-size="11" word-wrap="break-word" font-family="Ubuntu, Helvetica, Arial, sans-serif" locked="true" editable="false" vertical-align="middle" padding-left="25" padding-right="25" padding-bottom="0" padding-top="0">
		            <span style="font-size: 11px"><a href="https://mjml.io" target="_blank" style="text-decoration: none; color: inherit">[[PERMALINK_LABEL]]</a></span>
		          </mj-text>
		        </mj-column>
		      </mj-section>
		      <mj-section background-color="#ffffff" hidden="false" name="Nouvelle section" full-width="full-width" padding-bottom="0" padding-top="0">
		        <mj-column vertical-align="top" width="100%">
		          <mj-image src="http://z2mx.mjt.lu/img/z2mx/b/1ll/hxo.png" alt="" align="center" border="none" image-id="17141" width="600" vertical-align="top" padding-left="0" padding-right="0" padding-bottom="0" padding-top="0">

		          </mj-image>
		        </mj-column>
		      </mj-section>
		      <mj-section background-color="#009FE3" hidden="false" name="Nouvelle section" vertical-align="top" full-width="full-width" padding-bottom="0" padding-top="0">
		        <mj-column vertical-align="top" width="50%">
		          <mj-image src="http://z2mx.mjt.lu/img/z2mx/b/1ll/h0g.png" alt="" align="center" border="none" image-id="17177" width="300" vertical-align="top" padding-left="0" padding-right="0" padding-bottom="0" padding-top="0">

		          </mj-image>
		        </mj-column>
		        <mj-column vertical-align="top" width="50%">
		          <mj-text align="left" color="#000000" font-size="13px" word-wrap="break-word" font-family="Ubuntu, Helvetica, Arial, sans-serif" vertical-align="top" padding-left="25" padding-right="25" padding-bottom="30" padding-top="50">
		            <p><strong style="font-family: Arial; font-size: 14.666666666666666px; white-space: pre-wrap;"><span style="color: rgb(255, 255, 255);"><span style="font-size: 45px;"><span style="font-family: &apos;Open Sans&apos;, Helvetica, Arial, sans-serif;">Welcome</span></span></span></strong></p>
		            <p><span style="font-size:14.666666666666666px;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong><span style="color: rgb(255, 255, 255);"><span style="font-size: 45px;"><span style="font-family: &apos;Open Sans&apos;, Helvetica, Arial, sans-serif;">aboard</span></span>
		              </span>
		              </strong>
		              </span>
		            </p>
		          </mj-text>
		        </mj-column>
		      </mj-section>
		      <mj-section background-color="#009fe3" hidden="false" vertical-align="middle" name="Section-A" full-width="full-width" padding-bottom="20" padding-top="20">
		        <mj-column vertical-align="middle" width="100%">
		          <mj-text align="left" color="#000000" font-size="13px" word-wrap="break-word" font-family="Ubuntu, Helvetica, Arial, sans-serif" container-background-color="transparent" vertical-align="middle" padding-left="25" padding-right="25" padding-bottom="0" padding-top="0">
		            <p style="font-weight: 400; line-height: 30px; margin: 13px 0px;"><span style="color: rgb(255, 237, 0);"><span style="font-size: 25px;">Dear ${firstname}</span></span>
		            </p>
		            <p style="font-weight: 400; line-height: 30px; margin: 13px 0px;"><span style="color: rgb(255, 255, 255);"><span style="font-size: 25px;">Welcome to [[CompanyName]].</span></span>
		            </p>
		          </mj-text>
		          <mj-text align="left" color="#000000" font-size="13" word-wrap="break-word" font-family="Ubuntu, Helvetica, Arial, sans-serif" vertical-align="middle" padding-left="25" padding-right="25" padding-bottom="0" padding-top="0">
		            <p></p>
		            <p style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-family: Arial; font-size: 14.666666666666666px; white-space: pre-wrap; background-color: transparent;"><span style="color: rgb(255, 255, 255);">We&apos;re really excited you&apos;ve decided to give us a try. In case you have any questions, feel free to reach out to us at [[ContactEmail]].</span></span>
		            </p><br>
		            <p style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:14.666666666666666px;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><span style="color: rgb(255, 255, 255);">You can login to your account with your username [[UserName]]</span></span>
		            </p>
		            <p></p>
		          </mj-text>
		          <mj-button background-color="#ffffff" color="#FFFFFF" font-size="13px" align="left" vertical-align="middle" border="none" padding="15px 30px" border-radius="8px" href="https://mjml.io" font-family="Ubuntu, Helvetica, Arial, sans-serif" container-background-color="transparent"
		            padding-left="25" padding-right="25" padding-bottom="10" padding-top="10">
		            <span style="font-family: &apos;Open Sans&apos;, Helvetica, Arial, sans-serif;"><strong><span style="color: rgb(0, 159, 227);"><span style="font-size: 21px;">Login</span></span>
		            </strong>
		            </span>
		            </mj-button>
		            <mj-text align="left" color="#000000" font-size="13px" word-wrap="break-word" font-family="Ubuntu, Helvetica, Arial, sans-serif" vertical-align="middle" padding-left="25" padding-right="25" padding-bottom="0" padding-top="0">
		              <p></p>
		              <p style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="color: rgb(255, 255, 255); font-family: Arial; font-size: 14.666666666666666px; white-space: pre-wrap; background-color: transparent;">Thanks,</span></p>
		              <p style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:14.666666666666666px;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><span style="color: rgb(255, 255, 255);">The [[CompanyName]] Team</span></span>
		              </p>
		              <p></p>
		            </mj-text>
		        </mj-column>
		      </mj-section>
		      <mj-section hidden="false" locked="true" full-width="full-width" padding-bottom="20" padding-top="20">
		        <mj-column vertical-align="middle" width="100%">
		          <mj-text align="center" color="#000000" font-size="11" word-wrap="break-word" font-family="Ubuntu, Helvetica, Arial, sans-serif" locked="true" editable="false" vertical-align="middle" padding-left="25" padding-right="25" padding-bottom="0" padding-top="0">
		            <p style="font-size: 11px">[[DELIVERY_INFO]]</p>
		          </mj-text>
		          <mj-text align="center" color="#000000" font-size="11" word-wrap="break-word" font-family="Ubuntu, Helvetica, Arial, sans-serif" locked="true" editable="true" vertical-align="middle" padding-left="25" padding-right="25" padding-bottom="0" padding-top="0">
		            <p style="font-size: 11px"><span>   EN</span></p>
		          </mj-text>
		        </mj-column>
		      </mj-section>
		    </mj-container>
		  </mj-body>
		</mjml>
	`;	
}