<!-- Hallo, {{$patient['username']}} {{ $patient['name']}} <br>
Vielen Dank, dass Sie eine Pflegeberatung bei uns gebucht haben. Hier sind die Details Ihres Termins:
<br>
Name des Arztes: {{$employee['username']}} {{ $employee['name'] }}

<br>
Datum: {{ $reservation['date'] }}
<br>

Uhrzeit: {{ $reservation['hour'] }}
<br>
Bitte stellen Sie sicher, dass Sie pünktlich zum Termin erscheinen und alle relevanten Unterlagen bereithalten. Sollten Sie den Termin verschieben oder absagen müssen, kontaktieren Sie uns bitte so bald wie möglich.

Falls Sie Fragen haben oder weitere Informationen benötigen, stehen wir Ihnen jederzeit zur Verfügung.

Wir freuen uns darauf, Sie bald zu sehen und Ihnen bei Ihren Anliegen zu helfen.

Mit freundlichen Grüßen,
Das Pflegeteam von VIP-VITALISTEN.DE -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        
        <!-- design a better looking  -->
        <h4>
            Hallo, {{$patient['username']}} {{ $patient['name']}} <br>
</h4>

        <p> Vielen Dank, dass Sie eine Pflegeberatung bei uns gebucht haben. Hier sind die Details Ihres Termins:</p>

        <!-- make a table with the content -->
        <table>
            <tr>
                <td>Name des Arztes:</td>
                <td>{{$employee['username']}} {{ $employee['name'] }}</td>
            </tr>
            <tr>
                <td>Datum:</td>
                <td>{{ \Carbon\Carbon::parse($reservation['date'])->format('d.m.Y') }}</td>
            </tr>
            <tr>
                <td>Uhrzeit:</td>
                <td>{{ $reservation['hour'] }}</td>
            </tr>
            <td>Detail link zur Besprechung:</td>
            <td><a href="https://stagecrm.vip-vitalisten.de/profile" target="_blank">Gehe zum Link</a></td>
        </table>

        <p>
            Bitte stellen Sie sicher, dass Sie pünktlich zum Termin erscheinen und alle relevanten Unterlagen bereithalten. Sollten Sie den Termin verschieben oder absagen müssen, kontaktieren Sie uns bitte so bald wie möglich.
        </p>
        <p>
            Falls Sie Fragen haben oder weitere Informationen benötigen, stehen wir Ihnen jederzeit zur Verfügung.
        </p>
        <p>
            Wir freuen uns darauf, Sie bald zu sehen und Ihnen bei Ihren Anliegen zu helfen.
        </p>
        <p>
            Mit freundlichen Grüßen,
            Das Pflegeteam von VIP-VITALISTEN.DE
        </p>
    </div>

</body>
</html>